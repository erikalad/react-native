import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'

export default function App() {
  return (
    <WingBlank>
    <WhiteSpace />
    <Button>default</Button>
    <WhiteSpace />
    <Button disabled>default disabled</Button>
    <WhiteSpace />

    <Button type="primary">primary</Button>
    <WhiteSpace />
    <Button type="primary" disabled>
      primary disabled
    </Button>
    <WhiteSpace />

    <Button type="warning">warning</Button>
    <WhiteSpace />
    <Button type="warning" disabled>
      warning disabled
    </Button>
    <WhiteSpace />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>无点击反馈</Button>
    <WhiteSpace />
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <WhiteSpace />

    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="small">
        ghost
      </Button>
    </WingBlank>
    <WhiteSpace />

    <Button type="primary">
      <Icon name="login" />
    </Button>
  </WingBlank>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

