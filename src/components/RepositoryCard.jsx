import React from "react";
import { Label } from "semantic-ui-react";

const RepositoryCard = props => (
  <div className="item-Repository-Card" >
    <Label as="a" color="teal" image>
      Repository
      <Label.Detail>{props.name}</Label.Detail>
    </Label>
  </div>
);

export default RepositoryCard;
