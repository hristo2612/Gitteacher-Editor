import React from "react";
import { Label } from "semantic-ui-react";

const OwnerCard = props => (
  <div>
    <Label as="a" color="teal" image>
      <img src={props.avatarUrl} />
      Owner
      <Label.Detail>{props.name}</Label.Detail>
    </Label>
  </div>
);

export default OwnerCard;
