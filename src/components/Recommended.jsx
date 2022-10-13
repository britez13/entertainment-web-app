import Subtitle from "./Subtitle";
import Card from "./Card";

import { data } from "../data"

const Recommended = () => {

    const recommended = data.filter( item => item.isTrending === false )

  return (
    <section className='mt-6'>
      <Subtitle text={"Recommended for you"} />
      <div className="mt-4 flex gap-4 flex-wrap">
        {recommended.map((item) => {
          return <Card key={item.title} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Recommended

