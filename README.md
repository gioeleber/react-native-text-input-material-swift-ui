# react-native-text-input-material-swift-ui
A TextInput component customized to appear in material design on android e swift ui in ios

<p align="center"><img  src="http://www.gioelebernardi.it/projects/react-native-text-input-material-swift-ui/img/screenshot-ios.png"  alt="Screenschot iOS"  width="200"  height="433">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  src="http://www.gioelebernardi.it/projects/react-native-text-input-material-swift-ui/img/screenshot-android.png"  alt="Screenschot Android"  width="234"  height="433"></p>

## Installation
`npm install react-native-text-input-material-swift-ui`
## Usage
### `Container`
Creates a container for the screen and it will adapt the background color to the OS
```jsx
import  *  as  React  from  'react'
   import { Container} from  "react-native-text-input-material-swift-ui"

   export  default () => {
    return (
	    <Container>
		    {/* Content of the form screen goes here */}
	    </Container>
	)
}
```
#### Props
| Key | Type | Desctriprion | Example |
|-|-|-|-|
| isDarkMode | `boolean` | if `true` the container uses the dark color scheme | `isDarkMode={true}` |
| style | `StyleSheetPropType` | allow to add styles to the `ScrollView` component | `style={{paddingVertical:  35}}` |
### `TextInput`
This componet is a standard React Native text input that will have different styles applied dipending on the OS: on an android device it will obey the matirial design guidelines and in ios it will obay the Swift UI guidelines.
```jsx
import  *  as  React  from  'react'
import TextInput, { Container } from  "react-native-text-input-material-swift-ui"

export  default () => {
	// State
	const [nome, setNome] = React.useState('');
	
	return (
	    <Container>
		    <TextInput
				onChangeText={name => setName(name)}
				label='Name'
				defaultValue={name}
			/>
			{/* Other input components */}
	    </Container>
	)
}
```
#### Props
| Key | Type | Desctriprion | Example |
|-|-|-|-|
| isDarkMode | `boolean` | If `true` the container uses the dark color scheme | `isDarkMode={true}` |
| label | `string` | Create a float label on android and an input placeholed in ios | `label='Name'` |
| tintColor | `color` | The color of the floating android label | `tintColor='red'` |
| fontFamily | `string` | The font of placeholder and label |`fontFamily='open-sans-regular'`
| isFirst | `boolean` | If true provide the top border on the **iOS** input | `isFirst={true}` |
| isLast | `boolean` | If true provide the bottom border on the **iOS** input | `isLast={tue}` |
| stylesContainer | `StyleSheetPropType` | allow to add styles to the container `View` component **on Android** | `style={{paddingBottom:  10}}` |
| stylesLabel | `StyleSheetPropType` | allow to add styles to the label component **on Android** | `style={{left: 10}}` |
| style | `StyleSheetPropType` | allow to add styles to the `textInput` component | `style={{left: paddingBottom:  20}}` |
it also accept all the React Native `TextInput` props
### `InputGroupLabel`
This is a label that can be used to divide groups of input. This will also fallow OS design guidelines.
```jsx
import  *  as  React  from  'react'
import TextInput, { Container, InputGroupLabel } from  "react-native-text-input-material-swift-ui"

export  default () => {
	// State
	const [nome, setNome] = React.useState('');
	const [email, setEmail] = React.useState('');
	
	return (
	    <Container>
		    <InputGroupLabel isTop>
			    User information
			</InputGroupLabel>
		    <TextInput
				onChangeText={name => setName(name)}
				label='Name'
				defaultValue={name}
			/>
			<TextInput
				onChangeText={email => setEmail(email)}
				label='E-mail'
				defaultValue={email}
			/>
			{/* Other input groups */}
	    </Container>
	)
}
```
#### Props
| Key | Type | Desctriprion | Example |
|-|-|-|-|
| isDarkMode | `boolean` | If `true` the container uses the dark color scheme | `isDarkMode={true}` |
| fontFamily | `string` | The font of placeholder and label |`fontFamily='open-sans-regular'` |
| isTop | `boolean` | if `true` set the top margin to 0 |`fontFamily='open-sans-regular'` |
| style | `StyleSheetPropType` | allow to add styles to the label component | `style={{left: paddingBottom:  20}}` |