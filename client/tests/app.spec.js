import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from "enzyme";
import App from '../shared/components/App';
import Header from '../shared/components/Header';
import Navigation from '../shared/components/Navigation';
import accountStore from '../account/store';
import pageStore from '../shared/stores/pageStore';

describe("app", () => {

    describe("components", () => {

        describe("<App />", () => {

            it("should render the Header component", () => {
                // Arrange
                const accountDetails = {
                    signedIn: true,
                    basket: 2,
                    username: "Tim Watson"
                };
                sinon.stub(accountStore, "getAccountDetails").returns(accountDetails);

                // Act
                const wrapper = shallow(<App/>);
                const header = wrapper.find(Header);

                // Assert
                expect(header).to.exist;
                expect(header.node.props.accountDetails).to.equal(accountDetails);
            });

            it("should render the Navigation component", () => {
                // Arrange
                sinon.stub(pageStore, "getPage").returns("Books");

                // Act
                const wrapper = shallow(<App/>);
                const nav = wrapper.find(Navigation);

                // Assert
                expect(nav).to.exist;
                expect(nav.node.props.selectedPage).to.equal("Books");
            });

            it("should render child components", () => {
                // Arrange
                const ChildComponent = <div></div>;

                // Act
                const wrapper = shallow(<App>childComponent</App>);
                const child = wrapper.find(ChildComponent);

                // Assert
                expect(child).to.exist;
            });

            describe("componentDidMount", () => {

                it("should listen for changes on account store", () => {
                    // Arrange
                    const spy = sinon.spy(accountStore, "addChangeListener");

                    // Act
                    const wrapper = mount(<App />);

                    // Assert
                    expect(spy.calledWith(wrapper.node._onChange)).to.be.ok;
                });

                it("should listen for changed on page store", () => {
                    // Arrange
                    const spy = sinon.spy(pageStore, "addChangeListener");

                    // Act
                    const wrapper = mount(<App />);

                    // Assert
                    expect(spy.calledWith(wrapper.node._onChange)).to.be.ok;
                });
            });

            describe("componentWillUnmount", () => {

                it("should remove on change handlers", () => {
                    // Arrange
                    const accountSpy = sinon.spy(accountStore, "removeChangeListener");
                    const pageSpy = sinon.spy(pageStore, "removeChangeListener");

                    // Act
                    const wrapper = mount(<App />);
                    wrapper.unmount();

                    // Assert
                    expect(accountSpy.calledWith(wrapper.node._onChange)).to.be.ok;
                    expect(pageSpy.calledWith(wrapper.node._onChange)).to.be.ok;
                });
            });

            describe("_onChange", () => {

                it("should update state", () => {

                });

            });

        });
    });

});