// app/contact/page.tsx
export const metadata = {
  title: "Contact Page",
  description: "Next Contact Page",
};

// Simulate a 2-second delay
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Contact() {
  await wait(2000); // delay for 2 seconds
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("data: ", data);
  return (
    <div>
      <h1 className="text-center text-4xl my-12">Contact Page NextJS 🚀</h1>
    </div>
  );
}
