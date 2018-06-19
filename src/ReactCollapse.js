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

    previous = () => {
        const slides = this.props.content.content.length - 1;
        const previousSlide = this.state.activeSlide - 1;

        // select last slide if it is the first slide
        if(previousSlide < 0) {
            this.setState(Object.assign({}, this.state, {activeSlide: slides}));
        }
        // select previous slide if it not the first slide
        else if(previousSlide >= 0) {
            this.setState(Object.assign({}, this.state, {activeSlide: previousSlide}));
        }
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

    displayNextTitle = () => {
        const content = this.props.content.content;
        const slides = content.length - 1;
        const nextSlide = this.state.activeSlide + 1;
        let nextTitle = '';

        // select next slide if it is not the last slide
        if(nextSlide <= slides) {
            nextTitle = content[nextSlide].title;
        }
        // select first slide if it is the last slide
        else if(nextSlide > slides) {
            nextTitle = content[0].title;
        }

        return nextTitle;
    };

    render() {
        const { content } = this.props;
        const nextTitle = this.displayNextTitle();

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
                        <div className={'ReactCollapseSlideNavPrevious'} onClick={this.previous}>Prev</div>
                        <div className={'ReactCollapseSlideNavNext'} onClick={this.next}>{nextTitle}</div>
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