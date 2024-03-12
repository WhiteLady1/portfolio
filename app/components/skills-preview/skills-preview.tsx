'use client'
import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface SkillData {
  name: string;
  description?: string;
}

interface SkillsData {
  softskills: SkillData[];
  hardskills: SkillData[];
  showDetail?: boolean;
};

export const SkillsPreview: React.FC<SkillsData> = ({
  softskills,
  hardskills,
  showDetail = false
}) => {
  const [lengtOfAnimation, setLengthOfAnimation] = useState(0);
  const GAP = 8;
  const allSkills = [...softskills, ...hardskills].sort((a, b) => (a.name > b.name) ? 1 : -1);

  const ref = useRef<HTMLUListElement>(null);

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

    setLengthOfAnimation(getCoutOfElements());
  }, []);

  return (
    <>
      {showDetail ? (
        <Card>
          <CardBody>
            <ul>
                {softskills.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
              </ul>
            <ul>
              {hardskills.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ) : (
        <Card
          className='col-span-2 sm:col-span-3 row-start-5 w-full p-0 bg-[--background-card] h-[50px]'
          shadow='none'
        >
          <CardBody
            className="flex justify-center"
            style={{ overflowX: 'hidden', overflowY: 'hidden'}}
          >
            <motion.ul
              ref={ref}
              animate={{ x: [0, lengtOfAnimation, 0] }}
              transition={{ ease: "easeInOut", duration: 25, repeat: Infinity }}
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
      )}
    </>
  );
};
