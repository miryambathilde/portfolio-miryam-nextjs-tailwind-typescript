import { FunctionComponent } from "react";
import { iService } from "../type";

const ServiceCard: FunctionComponent<{ service: iService }> = ({
	service: { Icon, about, title },
}) => {

  const createMarkup = () => {
    return {
      __html:about
    }
  }
	return (  
  
  <div className="flex items-center p-2 space-x-4">

    <Icon className="w-12 h-12 text-green-500"/>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p dangerouslySetInnerHTML={createMarkup()}/>
    </div>
  </div>
  )

};

export default ServiceCard;
