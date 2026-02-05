import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Projects } from "@/components/projects/Projects";
import { Posts } from "@/components/blog/Posts";
import { competitiveProgramming } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="l" paddingY="8" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="s">
        <Column maxWidth="s" horizontal="center" align="center" gap="s">
          {/* {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="8"
              paddingBottom="20"
              paddingLeft="8"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )} */}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="16">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="8" delay={0.4} horizontal="center" paddingLeft="8">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {/* Competitive Programming Section */}
      <RevealFx translateY="8" delay={0.5}>
        <Column fillWidth horizontal="center" align="center" gap="xs" marginBottom="l">
          <Heading as="h2" variant="display-strong-m" style={{ textAlign: "center" }}>
            {competitiveProgramming.title}
          </Heading>
          <Row gap="8" horizontal="center">
            {competitiveProgramming.platforms.map((platform) => (
              <Button
                key={platform.name}
                href={platform.url}
                prefixIcon={platform.icon}
                variant="secondary"
                size="m"
                weight="default"
                target="_blank"
              >
                {platform.name}
              </Button>
            ))}
          </Row>
        </Column>
      </RevealFx>
      <RevealFx translateY="16" delay={0.5}>
        <Column fillWidth horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-m" style={{ textAlign: "center" }}>
        Projects
          </Heading>
        </Column>
      </RevealFx>
      <RevealFx translateY="8" delay={0.6}>
        <Projects />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="12" marginBottom="m">
          <Row fillWidth paddingRight="32">
            <Line maxWidth={32} />
          </Row>
          <Row fillWidth gap="12" marginTop="20" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="s" paddingTop="12">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="s">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="32" horizontal="end">
            <Line maxWidth={32} />
          </Row>
        </Column>
      )}
    </Column>
  );
}
