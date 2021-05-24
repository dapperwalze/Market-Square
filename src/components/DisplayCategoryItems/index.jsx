import { Badge } from "../Badge";
import { CategoryItem } from "../CategoryItem";
import "./displaycategoryitems.scss";
import HeadPhone from "../CategoryItem/head-phone.jpg";
import Mouse from "../CategoryItem/mouse.jpg";
import Iphone11 from "../CategoryItem/iPhone-11.jpg";
import BlowDryer from "../CategoryItem/blow-dryer.jpg";
import { SearchBar } from "../SearchBar";

export const DisplayCategoryItems = (props) => {
  return (
    <main className="main__section">
      <SearchBar />

      <h2 className="main__section__header">
        {props.categoryName} <Badge className="badge" numberOfItems={12} />
      </h2>

      <CategoryItem
        linkTo="/product:id"
        alt="Head Phone"
        productImageSource={HeadPhone}
        productName="Norbury Scandinavian Wood Leg Ottoman"
        productPrice="76,500"
      />

      <CategoryItem
        linkTo="/product:id"
        alt="Mouse"
        productImageSource={Mouse}
        productName="Norbury Scandinavian Wood Leg Ottoman"
        productPrice="76,500"
      />

      <CategoryItem
        linkTo="/product:id"
        alt="iPhone 11"
        productImageSource={Iphone11}
        productName="Norbury Scandinavian Wood Leg Ottoman"
        productPrice="76,500"
      />

      <CategoryItem
        linkTo="/product:id"
        alt="Blow Dryer"
        productImageSource={BlowDryer}
        productName="Norbury Scandinavian Wood Leg Ottoman"
        productPrice="76,500"
      />

      <CategoryItem
        linkTo="/product:id"
        alt="Head Phone"
        productImageSource={HeadPhone}
        productName="Norbury Scandinavian Wood Leg Ottoman"
        productPrice="76,500"
      />
    </main>
  );
};
