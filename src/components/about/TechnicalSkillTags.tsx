"use client";
import { Tag, Row } from "@once-ui-system/core";
import React from "react";

import type { IconName } from "@once-ui-system/core";

interface SkillTag {
  name: string;
  url: string;
  icon?: IconName;
}

interface Skill {
  title: string;
  tags: SkillTag[];
}

interface TechnicalSkillTagsProps {
  skills: Skill[];
}

export default function TechnicalSkillTags({ skills }: TechnicalSkillTagsProps) {
  // Flatten all tags into a single array
  const allTags = skills.flatMap(skill => skill.tags);
  return (
    <Row wrap gap="8" paddingTop="8">
      {allTags.map((tag, tagIndex) => (
        <a
          key={tagIndex}
          href={tag.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Tag
            size="l"
            prefixIcon={tag.icon}
            style={{
              transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
              cursor: "pointer",
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {tag.name}
          </Tag>
        </a>
      ))}
    </Row>
  );
}
