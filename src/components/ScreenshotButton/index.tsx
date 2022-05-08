import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
    screenshot: string | null;
    onTakeScreenshot: () => void;
    onRemoveScreenshot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeScreenshot, onRemoveScreenshot }: Props) {
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
    >
        {
            screenshot
                ?
                <View>
                  <Image style={styles.image} source={{ uri: screenshot }} />

                  <Trash size={22} color={theme.colors.text_secondary} weight="fill" style={styles.removeIcon} />
                </View>
                : <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
        }
    </TouchableOpacity>
  );
}