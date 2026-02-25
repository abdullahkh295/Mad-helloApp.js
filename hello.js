import React from &#39;react&#39;;
import { View, Text, StyleSheet } from &#39;react-native&#39;;
const App = () =&gt; {
return (
&lt;View style={styles.container}&gt;
&lt;Text style={styles.text}&gt;Hello World!&lt;/Text&gt;
&lt;/View&gt;
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: &#39;center&#39;,
alignItems: &#39;center&#39;,
backgroundColor: &#39;#f5fcff&#39;,
},
text: {
fontSize: 24,

fontWeight: &#39;bold&#39;,
},
});
export default App;