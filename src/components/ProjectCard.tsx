"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { HiOutlinePhotograph } from "react-icons/hi";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  github?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  github,
}) => {
  const hasImage = images && images.length > 0 && images[0];
  if (hasImage) {
    return (
      <div className="projectCard">
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
        <Flex
          s={{ direction: "column" }}
          fillWidth
          paddingX="s"
          paddingTop="12"
          paddingBottom="24"
          gap="l"
        >
          {title && (
            <Flex flex={5}>
              <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                {title}
              </Heading>
            </Flex>
          )}
          {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
            <Column flex={7} gap="16">
              {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
              {description?.trim() && (
                <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                  {description}
                </Text>
              )}
              <Flex gap="24" wrap>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">Read case study</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">View project</Text>
                  </SmartLink>
                )}
                {github && (
                  <SmartLink
                    suffixIcon="github"
                    style={{ margin: "0", width: "fit-content" }}
                    href={github}
                    target="_blank"
                  >
                    <Text variant="body-default-s">GitHub</Text>
                  </SmartLink>
                )}
              </Flex>
            </Column>
          )}
        </Flex>
      </div>
    );
  }
  // No image: center everything, row by row
  return (
    <div className="projectCard noImage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 280 }}>
      {title && (
        <Heading as="h2" wrap="balance" variant="heading-strong-xl" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {title}
        </Heading>
      )}
      {description?.trim() && (
        <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {description}
        </Text>
      )}
      <Flex gap="24" wrap style={{ justifyContent: 'center' }}>
        {content?.trim() && (
          <SmartLink
            suffixIcon="arrowRight"
            style={{ margin: "0", width: "fit-content" }}
            href={href}
          >
            <Text variant="body-default-s">Read case study</Text>
          </SmartLink>
        )}
        {link && (
          <SmartLink
            suffixIcon="arrowUpRightFromSquare"
            style={{ margin: "0", width: "fit-content" }}
            href={link}
          >
            <Text variant="body-default-s">View project</Text>
          </SmartLink>
        )}
        {github && (
          <SmartLink
            suffixIcon="github"
            style={{ margin: "0", width: "fit-content" }}
            href={github}
            target="_blank"
          >
            <Text variant="body-default-s">GitHub</Text>
          </SmartLink>
        )}
      </Flex>
    </div>
  );
};
