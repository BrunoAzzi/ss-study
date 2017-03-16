import React from 'react'

import {
    Text,
    View,
    StyleSheet,
} from 'react-native';


/**
 * @param {bullet}           : label of text                    (String)
 * @param {array}            : Array of json objects            (json object)
 *                            [ {id:1, value:'some'}, ... , {id:N, value:'thing'} ]
 * @param {styles}           : json object                      (StyleSheet)
 *                            {
 *                              bulletsView: ...                (TouchableHighlight style)
 *                              bulletsText: ...                  (Text style)
 *                            }
 *                            obs. all the style children are optional
 */
Bullets = ({bullet=def_bullet, array=def_array, styles=def_styles}) => {
  const bulletsView = styles.bulletsView ? styles.bulletsView : def_styles.bulletsView;
  const bulletsElementView = styles.bulletsElementView ? styles.bulletsElementView : def_styles.bulletsElementView;
  const bulletsElementText = styles.bulletsElementText ? styles.bulletsElementText : def_styles.bulletsElementText;
  return (
    <View style={bulletsView}>
    {
      array.map((e)=>{
        return (
          <View key={e.id} style={bulletsElementView}>
            <Text style={bulletsElementText}>{bullet}</Text>
            <Text style={bulletsElementText}>{e.value}</Text>
          </View>
        );
      })
    }
    </View>
  );
}

/**samples: \u2022 \u2023 \u25E6 ○ ○ ⦿ ⦾ •  */
const def_bullet = '○';

const def_array = [
  {id:0, value:"This is the first"},
  {id:1, value:"This is the second"},
  {id:2, value:"This is the third"},
];

const def_styles = StyleSheet.create({
  bulletsView:{
    margin:10
  },
  bulletsElementView:{
    flex:1,
    flexDirection:'row',
  },
  bulletsElementText:{
    color: '#000000',
    margin:2,
    fontSize:14,
  },
});

export {Bullets};
