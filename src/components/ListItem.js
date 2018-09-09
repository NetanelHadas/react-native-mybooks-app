import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class ListItem extends Component {
    render = () => {
        const { author_name } = this.props.book;

        const {
            headerContentStyle,
            headerTextStyle,
            imageStyle
        } = styles;

        return(
            <Card>
                {/* <CardSection>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{book_title}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image
                        style={imageStyle}
                        source={{ uri: book_image }}
                    />
                </CardSection> */}

                <CardSection>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{author_name}</Text>
                        <Text>{published_date}</Text>
                    </View>
                </CardSection>

                {/* <CardSection>
                    <Button>
                        Edit Book
                    </Button>
                </CardSection> */}
            </Card>
        );
    }
}

export default ListItem;

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
        // important: flex 1 and width null will stretch the picture the entire width of the device.
    },
}
