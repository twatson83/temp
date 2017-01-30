import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from "enzyme";
import AccountDropDown from '../header/components/AccountDropDown';

describe("app", () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("components", () => {

        describe("<AccountDropDown />", () => {

            describe("when signed in", () => {
                const accountDetails = {
                    signedIn: true,
                    basket: 2,
                    username: "Tim Watson"
                };

                it("should display users username", () => {
                    const wrapper = shallow(<AccountDropDown accountDetails={accountDetails} />)
                    const span = wrapper.find(".accountDropDown-hello");
                    expect(span).to.exist;
                    expect(span.node.props.children).to.equal("Hello Tim Watson");
                });

                it("should not display sign in link", () => {
                    const wrapper = shallow(<AccountDropDown accountDetails={accountDetails} />)
                    const link = wrapper.find(".accountDropDown-signIn");
                    expect(link.node).to.not.exist;
                });
            });

            describe("when not signed in", () => {
                const accountDetails = {
                    signedIn: false,
                    basket: 0,
                    username: "twatson"
                };

                it("it should not display users username", () => {
                    const wrapper = shallow(<AccountDropDown accountDetails={accountDetails} />)
                    const span = wrapper.find(".accountDropDown-hello");
                    expect(span).to.exist;
                    expect(span.node.props.children).to.not.equal("Hello Tim Watson");
                });
                it("should display sign in link", () => {
                    const wrapper = shallow(<AccountDropDown accountDetails={accountDetails} />)
                    const link = wrapper.find(".accountDropDown-signIn");
                    expect(link).to.exist.exist;
                });
            });

            it("should display Your Account link", () => {
                const wrapper = shallow(<AccountDropDown accountDetails={{
                    signedIn: true,
                    basket: 2,
                    username: "Tim Watson"
                }} />)
                const link = wrapper.find(".yourAccount");
                expect(link).to.exist.exist;
            });

            it("should display Your Orders link", () => {
                const wrapper = shallow(<AccountDropDown accountDetails={{
                    signedIn: true,
                    basket: 2,
                    username: "Tim Watson"
                }} />)
                const link = wrapper.find(".yourOrders");
                expect(link).to.exist.exist;
            });

        });

    });

});