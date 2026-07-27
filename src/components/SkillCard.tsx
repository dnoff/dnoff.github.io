import { motion, useReducedMotion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaCode, FaDatabase, FaGamepad, FaJava, FaTools } from 'react-icons/fa';
import { MdAnimation, MdOutlinePhotoCamera } from 'react-icons/md';
import { RiGoogleFill } from 'react-icons/ri';
import {
  SiBlender,
  SiCplusplus,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiUnity,
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandOffice, TbCursorText } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import type { SkillCategory } from '../types';
import { cn } from '../utils';

const CATEGORY_ICONS: Record<string, IconType> = {
  programming: FaCode,
  'game-development': FaGamepad,
  other: FaTools,
};

const SKILL_ICONS: Record<string, IconType> = {
  'C#': TbBrandCSharp,
  Python: SiPython,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: FaDatabase,
  'C++': SiCplusplus,
  Unity: SiUnity,
  Blender: SiBlender,
  Firebase: SiFirebase,
  Git: SiGit,
  'Visual Studio': VscCode,
  Cursor: TbCursorText,
  Photoshop: MdOutlinePhotoCamera,
  Premiere: MdAnimation,
  'Google Workspace': RiGoogleFill,
  'Microsoft Office': TbBrandOffice,
};

type SkillCardProps = {
  category: SkillCategory;
  index?: number;
};

export function SkillCard({ category, index = 0 }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const CategoryIcon = CATEGORY_ICONS[category.id] ?? FaCode;

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      className={cn(
        'rounded-2xl border border-white/10 bg-background-secondary/80 p-6 shadow-soft',
        'transition-colors duration-200 hover:border-accent/35 hover:shadow-glow',
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-background-card text-accent-secondary">
          <CategoryIcon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-display text-xl font-semibold text-text-primary">{category.title}</h3>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => {
          const SkillIcon = SKILL_ICONS[skill];

          return (
            <motion.li
              key={skill}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.08 + skillIndex * 0.03 }}
            >
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-background-card px-3 py-2 text-sm text-text-muted transition-colors hover:border-accent/30 hover:text-text-primary">
                {SkillIcon ? (
                  <SkillIcon className="h-3.5 w-3.5 text-accent-secondary" aria-hidden />
                ) : null}
                {skill}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </motion.article>
  );
}
