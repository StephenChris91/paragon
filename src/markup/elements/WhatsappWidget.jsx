import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const ReactApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="+2348139597022"
			position="right"
			iconSize="60"
			iconColor="white"
			iconBgColor="#117A65"
			headerIcon="https://i.pravatar.cc/50"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#117A65"
			headerTitle="Paragon Support"
			headerCaption="Online"
			bodyBgColor="#F4F6F6"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#117A65"
			btnBgColor="#0E6655"
			btnTxtColor="white"
		/>
	);
};

export default ReactApp;