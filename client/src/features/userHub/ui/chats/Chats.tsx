import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";

type Props = {
  title: string
}
export const Chats = ({title}: Props) => {
  const {users} = useUserHub();
  console.log(users)

  return (
    <section>
      <h2 className={'h2App'}>{title}</h2>
      <div>
        {users.map(el =>
          <div key={el.id}>
            <div>{el.username}</div>
          </div>
        )}
      </div>
    </section>
  );
};
