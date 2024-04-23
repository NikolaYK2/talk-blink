import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";

type Props = {
  title: string
}
export const Chats = ({title}: Props) => {
  const {} = useUserHub();

  return (
    <section>
      <h2 className={'h2App'}>{title}</h2>
    </section>
  );
};
