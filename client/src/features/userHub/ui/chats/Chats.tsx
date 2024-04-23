import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";

type Props = {
  title: string
}
export const Chats = ({title}: Props) => {
  const {profile} = useUserHub();
  console.log(profile)

  return (
    <section>
      <h2 className={'h2App'}>{title}</h2>
      <div>
        {profile.map(el =>
          <div key={el.id}>
            <div>{el.username}</div>
          </div>
        )}
      </div>
    </section>
  );
};
