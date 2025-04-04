import aboutAnimation from "../utils/aboutSectionAnimations";
import { Education } from "@/components/education";
import { educationList } from "@/config/data";
import { techonologyIconList } from "@/config/iconList";
import { siteConfig } from "@/config/site";
import { educationType, iconType } from "@/types";
import { Avatar, Card, CardBody, Image, Tooltip } from "@heroui/react";
import { forwardRef, useEffect } from "react";
import DefaultLayout from "@/layouts/default";

const IconComponent = forwardRef<HTMLDivElement, { icon: any }>(
  (props, ref): any => {
    return (
      <p ref={ref} {...props}>
        {props.icon}
      </p>
    );
  }
);
IconComponent.displayName = "IconComponent";

export const Index = () => {
  const whoAmIData = siteConfig.whoAmIData;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      aboutAnimation.whoAmIAnimation();
      aboutAnimation.professionAnimation();
      aboutAnimation.quoteAnimation();
      aboutAnimation.techonologyIconListAnimation();
      aboutAnimation.verticalImageAnimation();
      aboutAnimation.educationContentAnimation();
    } else {
      aboutAnimation.mobileAnimation();
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-rows-2 grid-cols-4 lg:grid-cols-3 gap-5">
        <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
          <CardBody className="flex-col items-center justify-center gap-2">
            <Avatar
              name="NM"
              src="./nico-profile.png"
              className="w-24 h-24 text-large brightness-90"
            />
            <h1 className="text-4xl font-bold">{whoAmIData.name}</h1>

            {/* <Button>Download CV</Button> */}
          </CardBody>
        </Card>

        <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2  opacity-0 mobile-animation whoAmICard">
          <CardBody className="gap-2">
            <div className="text-3xl font-bold">¿Quién soy?</div>
            <div className="text-lg text-gray-400">{whoAmIData.whoAmI} </div>
          </CardBody>
        </Card>

        <Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard">
          <CardBody className="justify-center items-center">
            <h2 className="text-2xl lg:text-3xl font-bold  text-center">
              {whoAmIData.profession}
            </h2>
          </CardBody>
        </Card>

        <Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard">
          <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
            <div className="text-3xl font-bold text-center">
              &#34;{whoAmIData.quote}&#34;
            </div>
          </CardBody>
        </Card>

        <Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
          <CardBody className="gap-4">
            <h2 className="text-3xl font-bold">
              Tecnologías que manejo
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
              {techonologyIconList.map(({ name, icon }: iconType) => (
                <Tooltip key={`technology-item-${name}`} content={name}>
                  <IconComponent icon={icon} />
                  {/* <Chip variant="flat">{name}</Chip> */}
                </Tooltip>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* vertical img */}
        <div className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3 rounded-xl relative opacity-0 mobile-animation verticalImage">
          <Image
            src="./stars.png"
            alt="profile image"
            width={400}
            className="object-cover"
          />
        </div>

        <Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation educationContent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#232323"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 16l6 -7l5 5l5 -6"></path>
            <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
          <CardBody className="gap-2 flex-wrap">
            <h2 className="text-3xl font-bold ">Habilidades</h2>

            <div className="flex flex-col lg:flex-col gap-2">
              {educationList.map((education: educationType) => (
                <Education
                  key={`education-item-${education.career}`}
                  career={education.career}
                  years={education.years}
                  description={education.description}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default Index;
