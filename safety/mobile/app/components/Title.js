import React from 'react'

import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

/**
 * @param {title}           : label of text                   (String)
 * @param {styles}          : json object                     (StyleSheet)
 *                            {
 *                              titleView: ...                (TouchableHighlight style)
 *                              titleText: ...                  (Text style)
 *                            }
 *                            obs. all the style children are optional
 */
Title = ({ title=def_title, styles=def_styles })=>{
  const titleView = styles.titleView ? styles.titleView : def_styles.titleView;
  const titleText = styles.titleText ? styles.titleText : def_styles.titleText;
  return (
    <View style={titleView}>
      <Text style={titleText}>
        {title}
      </Text>
    </View>
  );
}

const def_title = "TITLE";

const def_styles = StyleSheet.create({
  titleView: {
    flex:1,
    backgroundColor: '#E0E0E0',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
    textAlignVertical: 'center',
    marginVertical: 6,
    marginHorizontal: 10,
  },
});

export {Title};
