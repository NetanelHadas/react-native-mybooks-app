import React, { Component } from 'react';
import { Text, View, Image } from "react-native";
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from "./common";

class ListItem extends Component {
    
    onButtonPress = () => {
        Actions.bookEdit({ book: this.props.book.item });
    }

    showImage = () => {
        const { book_image } = this.props.book.item;
        const { imageStyle } = styles;

        if (book_image) {
            return (
                <CardSection>
                    <Image style={imageStyle} source={{ uri: book_image }} />
                </CardSection>
            )
        }

        return null;
    }
    
    render = () => {
        const { author_name, published_date, book_title, book_image } = this.props.book.item;
        
        const {
            headerContentStyle,
            bodyContentStyle,
            headerTextStyle,
            bodyTextStyle,
            imageStyle
        } = styles;

        return <Card>
            <CardSection>
              <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{book_title}</Text>
              </View>
            </CardSection>

            {this.showImage()}
            
            <CardSection>
              <View style={bodyContentStyle}>
                <Text style={bodyTextStyle}>
                  Author Name: {author_name}
                </Text>
                <Text style={bodyTextStyle}>
                  Published Date: {published_date}
                </Text>
              </View>
            </CardSection>

            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>Edit Book</Button>
            </CardSection>
          </Card>;
    }
}

const styles = {
  headerContentStyle: {
    justifyContent: "space-around",
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  bodyTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 500,
    flex: 1,
    width: null
    // important: flex 1 and width null will stretch the picture the entire width of the device.
  }
};

export default ListItem;