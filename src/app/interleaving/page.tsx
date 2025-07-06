import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

export default function InterLeaving() {
  return (
    <section>
      <h1>Inter leaving page</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </section>
  );
}
