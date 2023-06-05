import { forwardRef } from 'react';
import { useState } from 'react';
import images from '~/assets/images';
import styles from '~/Componments/Image/Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...prop }, ref) => {
    const [fallback, setFullback] = useState('');

    const handelError = () => {
        setFullback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            {...prop}
            onError={handelError}
        />
    );
});

export default Image;
