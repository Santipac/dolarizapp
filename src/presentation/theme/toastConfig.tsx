// App.jsx
import { BaseToast, BaseToastProps } from 'react-native-toast-message';
import theme from '.';

/*
  1. Create the config
*/
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.common.black }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        backgroundColor: theme.colors.greeny,
      }}
      text1Style={{
        fontSize: theme.font.size.large,
        fontFamily: theme.font.family.extrabold,
        fontWeight: '900',
      }}
      text2Style={{
        fontSize: theme.font.size.normal,
        fontFamily: theme.font.family.extrabold,
        fontWeight: '900',
      }}
    />
  ),
};

export default toastConfig;
