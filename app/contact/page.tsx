import ContactForm from "app/contact/contactForm";
import SocialContacts from "app/contact/socialContacts";

export default function Contact() {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:mt-20">
      <Title />
      <Content />
      <ContactForm />
      <SocialContacts />
    </div>
  );
}

function Title() {
  return <h2 className=" font-semibold">Let&apos;s connect!</h2>;
}
function Content() {
  return (
    <p>
      Would you like to meet up in person? Feel free to drop me a line. We will
      get together for a good cup of coffee ☕ Want to connect on social
      network? Find me on social media or send me a message below!
    </p>
  );
}
