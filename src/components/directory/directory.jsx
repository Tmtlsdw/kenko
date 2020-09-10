import React from "react";
import MenuItem from "../menu-item/menu-item.jsx";
import "./directory.sass";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Oil",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/32013_EssentialOil_Peppermint_2000x2000-400x400.png",
          id: 1,
          size: "",
        },
        {
          title: "Hair",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/42008_HairSkinNails_front_trans-400x400.png",
          id: 2,
          size: "",
        },
        {
          title: "Lotion",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/31003_BodyLotion-GreenTeaAloe_2000x2000-400x400.png",
          id: 3,
          size: "",
        },
        {
          title: "Cleanse",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/42012_7DayCleanse_front_OOP_RGB_1x1-400x400.png",
          id: 4,
          size: "",
        },
        {
          title: "Cream",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/31007_HandCream-CitrusBergamot_2000x2000-400x400.png",
          id: 5,
          size: "",
        },
        {
          title: "Face",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/31030_FacialToner-GreenApple_2000x2000-400x400.png",
          id: 6,
          size: "",
        },
        {
          title: "Gel",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/31011_ShaveGel-GreenTeaAloe_2000x2000-400x400.png",
          id: 7,
          size: "large",
        },
        {
          title: "Water",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/31046_FacialTonerSpray-RoseWater_2000x2000-400x400.png",
          id: 8,
          size: "large",
        },
        {
          title: "Snacks",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/05/Peppered-Beef-Jerky-Cropped-400x400.png",
          id: 9,
          size: "large",
        },
        {
          title: "Refills",
          imageUrl:
            "https://brandless.com/wp-content/uploads/2020/07/22016_TubTileCleaner_SummerBreeze_2pkRefill_2000x2000-400x400.png",
          id: 10,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className={"directory-menu"}>
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
