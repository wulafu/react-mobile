import { observer } from "mobx-react-lite";
import { useStore } from "@/stores";

const Index = observer(() => {
  const {
    homeStore,
    homeStore: { count },
  } = useStore();

  return (
    <div>
      <div>
        <code>homeStore.count: </code>
        {count}
      </div>
      <button onClick={() => homeStore.increase()}>increase</button>
      <button onClick={() => homeStore.decrease()}>decrease</button>
    </div>
  );
});

export default Index;
