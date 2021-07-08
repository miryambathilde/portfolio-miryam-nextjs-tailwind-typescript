import { FunctionComponent } from "react";
import { Service } from "../type";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
	service: { Icon, about, title },
}) => {

  const createMarkup = () => {
    return {
      __html:about
    }
  }
	return (  
  
  <div className="flex items-center space-x-4">

    <Icon className="w-12 h-12 text-green-500 dark:text-green-300"/>
    <div>
      <h6 className="font-bold">{title}</h6>
      <p dangerouslySetInnerHTML={createMarkup()}/>
    </div>
  </div>
  
  )

};

export default ServiceCard;
