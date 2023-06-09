import { forwardRef } from 'react';
import PropTypes from 'prop-types';
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
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            {...prop}
            onError={handelError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
