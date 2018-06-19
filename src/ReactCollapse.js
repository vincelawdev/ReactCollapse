import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './assets/css/ReactCollapse.css';

class ReactCollapse extends Component {
    state = {
        slidesCollapsed: true,
        activeSlide: 0
    };

    collapseToggle = () => {
        this.setState({slidesCollapsed: !this.state.slidesCollapsed});
    };

    next = () => {
        const slides = this.props.content.content.length - 1;
        const nextSlide = this.state.activeSlide + 1;

        // select next slide if it is not the last slide
        if(nextSlide <= slides) {
            this.setState(Object.assign({}, this.state, {activeSlide: nextSlide}));
        }
        // select first slide if it is the last slide
        else if(nextSlide > slides) {
            this.setState(Object.assign({}, this.state, {activeSlide: 0}));
        }
    };

    render() {
        const { content } = this.props;

        return (
            <div className={classnames('ReactCollapse', {'collapsed': this.state.slidesCollapsed})}>
                <h3 className={'ReactCollapseHeading'} onClick={this.collapseToggle}>{content.title}</h3>
                <div className={'ReactCollapseSlides'}>
                    {content.content.map((slide, slideIndex) => {
                        return (
                            <div className={classnames('ReactCollapseSlide', {'active': this.state.activeSlide === slideIndex})} key={slideIndex}>
                                <p className={'ReactCollapseSlideDescription'}>
                                    {slide.hasOwnProperty('thumbnail') &&
                                        <img src={require(`./assets/images/${slide.thumbnail}`)} className={'ReactCollapseSlideImage'} alt={''} />
                                    }
                                    <span dangerouslySetInnerHTML={{__html: slide.description}}></span>
                                </p>
                            </div>
                        )
                    })}
                    <div className={'ReactCollapseSlideNav'}>
                        <div className={'ReactCollapseSlideNavPrevious'}>Prev</div>
                        <div className={'ReactCollapseSlideNavNext'} onClick={this.next}>Next</div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactCollapse.propTypes = {
    content: PropTypes.object.isRequired
};

export default ReactCollapse;