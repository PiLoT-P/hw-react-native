import { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import ImageAvatar from '../../images/NFT-Avatar.png';
import bgImage from '../../images/Rectangle23.png';
import { TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Comments = () => {

    const [comment, setComment] = useState('');

    const [dataList, setdataList] = useState([
        { iconComment: ImageAvatar, textComment: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!', dataTime: '09 червня, 2020 | 08:40', status: 'user' },
        { iconComment: ImageAvatar, textComment: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',  dataTime: '09 червня, 2020 | 08:40', status: 'creator'},
        { iconComment: ImageAvatar, textComment: 'Thank you! That was very helpful!', dataTime: '09 червня, 2020 | 08:40', status: 'user' },
        { iconComment: ImageAvatar, textComment: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.', dataTime: '09 червня, 2020 | 08:40', status: 'creator' },
        { iconComment: ImageAvatar, textComment: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.', dataTime: '09 червня, 2020 | 08:40', status: 'creator' },
        { iconComment: ImageAvatar, textComment: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.', dataTime: '09 червня, 2020 | 08:40', status: 'creator' },
        { iconComment: ImageAvatar, textComment: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',  dataTime: '09 червня, 2020 | 08:40', status: 'creator'},
    ]);

    const sendComment = () => {
        const newComment = {
            iconComment: ImageAvatar,
            textComment: `${comment}`,
            dataTime: '09 червня, 2020 | 08:40',
            status: 'creator',
        }

        setdataList((prevList) => [...prevList, newComment]);
    }
    
    return (
        <View style={styles.container}>
            <Image source={bgImage} style={styles.mainImage} />
            <View style={styles.containerComments}>
                <FlatList 
                data={dataList}
                renderItem={({ item }) => (
                    <View>
                        {item.status === 'creator' ? 
                            <View style={styles.commentItem}>
                                <View style={styles.commentBlock}>
                                    <Text  style={styles.commentText}>{item.textComment}</Text>
                                    <Text style={[styles.commentData, styles.commentDataCR]}>{item.dataTime}</Text>
                                </View>
                                <Image source={item.iconComment} style={[styles.iconComment, styles.iconCommentCR]} />
                            </View>
                        :
                            <View style={styles.commentItem}>
                                <Image source={item.iconComment} style={styles.iconComment} />
                                <View style={styles.commentBlock}>
                                    <Text  style={styles.commentText}>{item.textComment}</Text>
                                    <Text style={styles.commentData}>{item.dataTime}</Text>
                                </View>
                            </View>
                        }
                    </View>
                )}
                />
            </View>
            <View style={styles.commentSendBlock}>
                <TextInput
                    value={comment}
                    onChangeText={(val) => setComment(val)}
                    placeholder={"Коментувати..."}
                    placeholderStyle={{ fontFamily: 'Roboto-Medium', fontSize: 16, color: '#BDBDBD', fontWeight: 500, }}
                    style={styles.inputComment}
                ></TextInput>
                <Ionicons onPress={() => sendComment()} style={styles.iconSend} name={'arrow-up'} size={24} color={'#fff'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32,
        backgroundColor: '#FFFFFF'
    },
    mainImage: {
        height: 240,
        width: '100%',
        borderRadius: 8,
    },
    containerComments: {
        flex: 1,
        paddingTop: 32,
        paddingBottom: 31,
    },
    commentItem: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 24,
    },
    commentBlock: {
        padding: 16,
        width: '87%',
        backgroundColor: '#00000008',
        borderTopLeftRadius: 6,
        borderBottomEndRadius: 6,
    },
    iconComment: {
        height: 28,
        width: 28,
        borderRadius: 50,
        marginRight: 16,
    },
    iconCommentCR: {
        marginLeft: 16,
    },
    commentText: {
        
        color: '#212121',
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 18,
    },
    commentData: {
        marginLeft: 'auto',
        color: '#BDBDBD',
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        fontWeight: 400,
        marginTop: 8,
    },
    commentDataCR: {
        marginLeft: 0,
    },
    commentSendBlock: {
        position: 'relative',
        marginTop: 'auto',
        marginBottom: 16,
    },
    iconSend: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 34,
        height: 34,
        backgroundColor: '#FF6C00',
        borderRadius: 50,
        padding: 4.8,
    },
    inputComment: {
        height: 50,
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 26,
        paddingLeft: 16,
        paddingRight: 44,
    }
})

export default Comments;