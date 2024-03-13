'use client'
import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Modal } from "..";

export interface SkillData {
  name: string;
  description?: string;
}

interface SkillsData {
  softskills: SkillData[];
  hardskills: SkillData[];
};

export const SkillsPreview: React.FC<SkillsData> = ({
  softskills,
  hardskills,
}) => {
  const [lengtOfAnimation, setLengthOfAnimation] = useState(0);
  const [durationOfAnimantion, setDurationOfAnimation] = useState(25);
  const [showModal, setShowModal] = useState(false);

  const GAP = 8;
  const allSkills = [...softskills, ...hardskills].sort((a, b) => (a.name > b.name) ? 1 : -1);

  const ref = useRef<HTMLUListElement>(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handelCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const getCoutOfElements = (): number => {
      let sum = 0
      let ulLength = 0;
      const array = [];
      if (ref.current) {
        ulLength = ref.current.offsetWidth;
        for (let i = 0; i < ref.current.children.length; i++) {
          array.push(ref.current.children[i]);
        }
        array.forEach(item => sum += item.clientWidth)
        return - (sum + (GAP * (array.length -1)) - ulLength);
      } else return 1;
    };

    const getDurationOfAnimation = (): number => {
      return allSkills.length * 3;
    };

    setLengthOfAnimation(getCoutOfElements());
    setDurationOfAnimation(getDurationOfAnimation());
  }, [allSkills]);

  return (
    <>
        <Card
          className='col-span-2 sm:col-span-3 row-start-5 sm:row-start-3 w-full p-0 bg-[--background-card]'
          shadow='none'
          isPressable
          onPress={handleOpenModal}
        >
          <CardBody
            className="flex justify-center"
            style={{ overflowX: 'hidden', overflowY: 'hidden'}}
          >
            <motion.ul
              ref={ref}
              animate={{ x: [0, lengtOfAnimation, 0] }}
              transition={{ ease: "easeInOut", duration: durationOfAnimantion, repeat: Infinity }}
              className="relative flex gap-2"
            >
              {allSkills.map((skill, index) => (
                <li key={index}>
                  <Chip className="bg-[--background-chip] text-[--text-contrast]" size="lg">{skill.name}</Chip>
                </li>
              ))}
            </motion.ul>
          </CardBody>
        </Card>
      <Modal isOpen={showModal} onClose={handelCloseModal}>
        <div className="flex justify-between gap-2">
          <div className="w-3/6">
            <p className="text-lg">Hardskills</p>
            <ul className="text-sm">
              {hardskills.sort((a, b) => (a.name > b.name) ? 1 : -1).map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div  className="w-3/6">
            <p className="text-lg">Softskills</p>
            <ul  className="text-sm">
                {softskills.sort((a, b) => (a.name > b.name) ? 1 : -1).map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
