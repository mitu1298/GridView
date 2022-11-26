import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ImageBackground,
} from "react-native";
import React from "react";

const numColumns = 2;

const gridViewww= ({ companions }) => {
	const data = [
		{
			Index: "1",
			Name: "Yashasvi",
			img: require("../assets/image1.jpeg"),
			rating: "4.5",
			state:"Mumbai",
		},
		{
			Index: "2",
			Name: "Atik",
			img: require("../assets/images6.jpeg"),
			rating: "4.2",
			state:"Surat",
		},
		{
			Index: "3",
			Name: "Tina",
			img: require("../assets/image2.jpeg"),
			rating: "4.1",
			state:"Mumbai",
		},
		{
			Index: "4",
			Name: "Messi",
			img: require("../assets/images7.jpeg"),
			rating: "3.9",
			state:"Pune",
		},
		{
			Index: "5",
			Name: "Aarya",
			img: require("../assets/image3.jpeg"),
			rating: "2.8",
			state:"Gujarat",
		},
		{
			Index: "6",
			Name: "Tom",
			img: require("../assets/tom.jpeg"),
			rating: "4.1",
			state:"Jaipur",
		},
		{
			Index: "7",
			Name: "Neymar",
			img: require("../assets/varun.jpeg"),
			rating: "3.5",
			state:"Delhi",
		},
		{
			Index: "8",
			Name: "Margot",
			img: require("../assets/image1.jpeg"),
			rating: "4.9",
			state:"Mumbai",
		},
		{
			Index: "9",
			Name: "Gal",
			img: require("../assets/images4].jpeg"),
			rating: "4.8",
			state:"Indore",
		},
		{
			Index: "10",
			Name: "Amber",
			img: require("../assets/images5.jpeg"),
			rating: "4.7",
			state:"Mumbai",
		},
		{
			Index: "11",
			Name: "Metu",
			img: require("../assets/images4].jpeg"),
			rating: "3.9",
			state:"Mumbai",
		},
	];

	{
		console.log("gkjadskadskas");
	}

	// formatRow = (data, numColumns) => {
	//     const totalRow = Math.floor(data.length / numColumns)
	//     let totalLastRow = data.length - (totalRow*numColumns)
	//     while(totalRow !== 0 && totalRow !== numColumns) {
	//         data.push({Index: 'blank', Name: 'blank', img: 'blank', rating: 'blank', cost: 'blank', empty: true})
	//         totalLastRow++
	//     }
	//     return data
	// }

	const renderData = ({ item }) => {
		return (
			<View style={styles.imgContainer}>
				<ImageBackground
					source={item.img}
					style={styles.imgStyle}
				>
					<View style={styles.blackScreen}>
						<View
							style={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							<View>
								<Text style={styles.textStyle}> {item.Name} </Text>
								<Text style={styles.textStyle1}>
									{item.rating} ⭐️
								</Text>
							</View>
							<View style={{ justifyContent: "flex-end" }}>
								<Text style={styles.textStyle1}>
									{item.state}
									{/* {item.price > 100000
										? `${item.price / 100000} L`
										: item.price} */}
								</Text>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	};

	return (
		<View style={{ marginTop: 30 }}>
			<FlatList
				data={data}
				numColumns={numColumns}
				keyExtractor={(Key) => {
					return Key.Index;
				}}
				renderItem={renderData}
			/>
		</View>
	);
};

export default gridViewww;

const styles = StyleSheet.create({
	imgContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FCBC05",
		height: 300,
		margin: 5,
		borderRadius: 10,
	},
	imgStyle: {
		height: 300,
		width: "100%",
		borderRadius: 10,
	},
	blackScreen: {
		height: 300,
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.2)",
		justifyContent: "flex-end",
		paddingHorizontal: 5,
		paddingBottom: 5,
		borderRadius: 10,
	},
	textStyle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
	textStyle1: {
		fontSize: 16,
		color: "#fff",
	},
});
