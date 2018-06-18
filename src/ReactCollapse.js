import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                <div className={'ReactCollapseSlides'}>
                    {content.content.map((slide, slideIndex) => {

                        return <div className={'ReactCollapseSlide'} key={slideIndex}>{slideIndex}</div>
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