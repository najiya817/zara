import { Box, Image } from "@chakra-ui/react";
// import React, { Component } from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import sliderImage1 from "../../Asssets/SliderImage1.jpg";
// import sliderImage2 from "../../Asssets/SliderImage2.gif";
// import sliderImage3 from "../../Asssets/SliderImage3.jpg";
// import sliderImage4 from "../../Asssets/SliderImage4.gif";
// import sliderImage5 from "../../Asssets/SliderImage5.jpg";

function HomeSlider() {
	const [ban, setBan] = useState([]);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	useEffect(() => {
		fetch("http://127.0.0.1:8000/ban/")
			.then((response) => response.json())
			.then((data) => {
				setBan(data);
				console.log(data);
			});
	}, []);
	return (
		<Box
			width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
			margin="auto"
			marginTop={3}
		>
			<Slider {...settings}>
				{ban.map((item)=>{
					return(
						<Box borderRadius={"8px"}>
						<Image
							borderRadius={"8px"}
							margin={"auto"}
							width={"100%"}
							height={"500px"}
							src={item.photo}
						/>
				</Box>
					)
				})}
				
			</Slider>
		</Box>
	);
};
export default HomeSlider;
// export default class HomeSlider extends Component {
	// render() {
	// 	const settings = {
	// 		dots: true,
	// 		infinite: true,
	// 		speed: 500,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		autoplay: true,
	// 	};

	// 	return (
			// <Box
			// 	width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
			// 	margin="auto"
			// 	marginTop={3}
			// >
// 				</Slider>
// 			</Box>
// 		);
// 	}
// }
