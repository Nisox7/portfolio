import { useState, FormEvent, useMemo, useRef } from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import emailjs from '@emailjs/browser';
import { Spinner } from "@heroui/react";
import { toast } from "sonner";
import { CircleCheckSVG, CircleXSVG } from "./ui/icons";

export const Form = () => {
  const [isFormSent, setIsFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (emailValue === "") return false;
    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const showButton =
    emailValue.trim() !== "" &&
    !isEmailInvalid &&
    nameValue.trim() !== "" &&
    descriptionValue.trim() !== "";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return; // Ensure the form exists

    setIsLoading(true); // Set loading to true when sending starts

    try {
      await emailjs.sendForm(
        'service_4bgpev4', // Replace with your actual EmailJS service ID
        'template_z2b1qbn', // Replace with your actual EmailJS template ID
        form.current,
        'wPYfxv2oYYWAl94Vn' // Replace with your actual EmailJS public key
      );
      setEmailValue("")
      setNameValue("")
      setDescriptionValue("")
      setIsFormSent(true)
      toast("Email enviado con éxito", {
        className: "my-classname",
        duration: 3000,
        icon: <CircleCheckSVG />,
      });
    } catch (error) {
      console.error('FAILED...', error);
      toast("Error al enviar el email", {
        className: "my-classname",
        duration: 3000,
        icon: <CircleXSVG />,
      });
    } finally {
      setIsLoading(false); // Set loading to false when sending ends
    }
  };

  return (
    <div>
      {!isFormSent ? (
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex w-full gap-4 flex-wrap flex-col">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
              <Input
                isRequired
                value={emailValue}
                id="user_email"
                name="user_email"
                type="email"
                label="Email"
                isInvalid={isEmailInvalid}
                color={isEmailInvalid ? "danger" : "default"}
                errorMessage="Ingrese un email válido"
                onValueChange={setEmailValue}
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  inputWrapper: [
                    "shadow-xl",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                  ],
                }}
              />
              <Input
                isRequired
                value={nameValue}
                id="user_name"
                name="user_name"
                type="text" // Changed to 'text' for name
                label="Nombre"
                onValueChange={setNameValue}
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  inputWrapper: [
                    "shadow-xl",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                  ],
                }}
              />
            </div>
            <Textarea
              isRequired
              value={descriptionValue}
              label="Mensaje"
              id="message"
              name="message"
              placeholder="Mensaje a enviar"
              onValueChange={setDescriptionValue}
              classNames={{
                label: "text-black/50 dark:text-white/90",
                inputWrapper: [
                  "shadow-xl",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                ],
              }}
            />
            <div className="flex justify-center">
              {isLoading ? (
                <Spinner label="Enviando..." color="primary" size="lg" /> // Render spinner when loading
              ) : (
                showButton && <Button color="primary" type="submit">Enviar</Button>
              )}
            </div>
          </div>
        </form>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold">¡Gracias por contactarme!</h2>
          <p className="mt-2">Me pondré en contacto contigo pronto.</p>
          <Button
            color="primary"
            className="mt-4"
            onPress={() => setIsFormSent(false)}
          >
            Enviar otro mensaje
          </Button>
        </div>
      )}
    </div>
  );
};
