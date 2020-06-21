import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import { Icon, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

const Wrap: any = styled.View`
  flex: 1;
`;

const CameraInner: any = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
`;

const IconWrap: any = styled.View`
  width: 100%;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const IconInner: any = styled.View`
  width: 80px;
  border-radius: 50;
  overflow: hidden;
  margin: 0 auto;
`;

const SuccessText: any = styled.Text`
  font-size: 24px;
  color: #1fa67a;
  font-weight: bold;
  text-align: center;
  align-self: center;
`;

const Text: any = styled.Text`
  font-size: 12px;
`;

const CameraCommponent: FC = (): ReactElement => {
  const [isCamera, setCamera] = useState<boolean>(false);
  const [type, setType] = useState(undefined);
  const [isDisplay, setDisplay] = useState(false);
  const [isPhotograph, setPhotograph] = useState(true);

  const cameraRef = useRef<any>(null);

  useEffect(() => {
    // カメラの使用権限を確認
    const checkPermission = async () => {
      try {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        setCamera(status === 'granted');
        setType(Camera.Constants.Type.back);
      } catch {
        setCamera(false);
      }
    };

    checkPermission();
  }, []);

  const onClickTrigger = useCallback(async () => {
    if (cameraRef === null && !isPhotograph) {
      return;
    }

    if (cameraRef.current === null) {
      return;
    }

    setPhotograph(false);

    const pictureData = await cameraRef.current.takePictureAsync();

    setDisplay(true);

    setTimeout(() => {
      setDisplay(false);
      setPhotograph(false);
    }, 1000);

    console.log(pictureData.uri);
  }, [cameraRef, isPhotograph]);

  const success = isDisplay ? <SuccessText>撮影完了</SuccessText> : null;

  const camera = isCamera ? (
    <Camera
      style={{
        flex: 1,
        paddingBottom: 100
      }}
      type={type}
      ref={cameraRef}
    >
      <CameraInner>
        {success}
        <IconWrap>
          <IconInner>
            <Button
              icon={<Icon name='camera' size={30} color='white' />}
              buttonStyle={{ backgroundColor: '#1fa67a', height: '100%' }}
              onPress={onClickTrigger}
            />
          </IconInner>
        </IconWrap>
      </CameraInner>
    </Camera>
  ) : (
    <Text>失敗</Text>
  );

  return <Wrap>{camera}</Wrap>;
};

export default CameraCommponent;
