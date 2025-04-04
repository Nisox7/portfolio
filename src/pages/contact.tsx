import { GithubSVG, LinkedInSVG, MailSVG } from "@/components/ui/icons";
import { contactData } from "@/config/data";
import { Button, Card, CardBody, Link } from "@heroui/react";
import { useEffect } from "react";
import contactAnimation from "../utils/contactSectionAnimations";
import DefaultLayout from "@/layouts/default";
import { Form } from "@/components/form";
import { Toaster } from "sonner";

export default function ContactPage() {
  const { email, github, linkedIn } = contactData;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return contactAnimation.mobileAnimation();

    contactAnimation.emailAnimation();
    contactAnimation.githubAnimation();
    contactAnimation.linkedInAnimation();
    contactAnimation.formAnimation();
  }, []);

  return (
    <DefaultLayout>
      <div className="">
      <section className="overflow-hidden 2xl:overflow-visible">
        <div className="grid grid-rows-2 grid-cols-2 gap-5 max-w-2xl mx-auto">
          <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1 opacity-0 mobile-animation emailCard">
            <CardBody className="flex flex-row justify-center items-center gap-2">
              <Button
                onPress={() =>
                  (location.href = `mailto:${email}?subject=Mail desde tu Portafolio`)
                }
                startContent={<MailSVG />}
              >
                {email}
              </Button>
            </CardBody>
          </Card>

          <Card
            isHoverable
            className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer opacity-0 mobile-animation linkedInCard"
          >
            <Link
              href={linkedIn}
              rel="noopener noreferrer"
              target="_blank"
              className="min-h-full flex justify-center items-center"
            >
              <CardBody
                className="flex justify-center items-center"
                onClick={() => window.open(`${linkedIn}`, "_blank")}
              >
                {/* <XSVG /> */}
                <LinkedInSVG />
              </CardBody>
            </Link>
          </Card>

          <Card
            isHoverable
            className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer opacity-0 mobile-animation githubCard "
          >
            <Link
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              className="min-h-full flex justify-center items-center"
            >
              <CardBody className="flex justify-center items-center gap-2">
                <GithubSVG />
                <h1 className="text-3xl font-bold">Perfil de Github</h1>
                <p className="text-xl text-gray-400  text-center">
                  Ver más proyectos en mi repositorio
                </p>
              </CardBody>
            </Link>
          </Card>

          <div className="col-span-full mt-8 opacity-0 mobile-animation form">
            <Form />
          </div>
        </div>
      </section>
      <Toaster theme="dark"/>
      </div>
    </DefaultLayout>
  );
}
