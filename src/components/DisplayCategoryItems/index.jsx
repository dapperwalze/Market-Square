import { Badge } from "../Badge";
import { CategoryItem } from "../CategoryItem";
import "./displaycategoryitems.scss";
import HeadPhone from "../CategoryItem/head-phone.jpg";
import Mouse from "../CategoryItem/mouse.jpg";
import Iphone11 from "../CategoryItem/iPhone-11.jpg";
import BlowDryer from "../CategoryItem/blow-dryer.jpg";

export const DisplayCategoryItems = (props) => {
  return (
    <main className="main__section">
      <h2 className="main__section__header">
        {props.categoryName} <Badge numberOfItems={12} />
      </h2>
      <CategoryItem
        alt="Head Phone"
        productImageSource={HeadPhone}
        productName="Sony WH-1000XM4 Wireless Noise Canceling Overhead Headphones"
        productPrice="76,500"
      />
      <CategoryItem
        alt="Mouse"
        productImageSource={Mouse}
        productName="Lorem ipsum lorem"
        productPrice="76,500"
      />
      <CategoryItem
        alt="iPhone 11"
        productImageSource={Iphone11}
        productName="Iphone 11 blah blah"
        productPrice="76,500"
      />

      <CategoryItem
        alt="Blow Dryer"
        productImageSource={BlowDryer}
        productName="Blow dryer"
        productPrice="76,500"
      />
      <CategoryItem
        alt="Head Phone"
        productImageSource={HeadPhone}
        productName="Sony  Headphones"
        productPrice="76,500"
      />
    </main>
  );
};
