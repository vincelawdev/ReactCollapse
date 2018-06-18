import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './assets/css/ReactCollapse.css';

class ReactCollapse extends Component {
    state = {
        activeSlide: 0
    };

    render() {
        const { content } = this.props;

        return (
            <div className={'ReactCollapse'}>
                <h3 className={'ReactCollapseHeading'}>{content.title}</h3>
                <div className={classnames('ReactCollapseSlides')}>
                    {content.content.map((slide, slideIndex) => {
                        return (
                            <div className={classnames('ReactCollapseSlide', {'active': this.state.activeSlide === slideIndex})} key={slideIndex}>
                                {slide.hasOwnProperty('thumbnail') &&
                                    <p className={'ReactCollapseSlideDescription'}>
                                        <img src={require(`./assets/images/${slide.thumbnail}`)} className={'ReactCollapseSlideImage'} alt={''} />
                                        <span dangerouslySetInnerHTML={{__html: slide.description}}></span>
                                    </p>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

ReactCollapse.propTypes = {
    content: PropTypes.object.isRequired
};

export default ReactCollapse;