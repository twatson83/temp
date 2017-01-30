import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from "enzyme";
import Title from '../header/components/Title';
import BasketButton from '../header/components/BasketButton';
import AccountDropDown from '../header/components/AccountDropDown';
import Header from '../header/components/Header';

describe("app", () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("components", () => {

        const accountDetails = {
            signedIn: true,
            basket: 2,
            username: "Tim Watson"
        };

        describe("<Header />", () => {

            it("should render the <Title /> component", () => {
                const wrapper = mount(<Header accountDetails={accountDetails} />)
                const title  = wrapper.find(Title);
                expect(title).to.exist;
            });

            it("should render the <AccountDropDown /> component", () => {
                const wrapper = mount(<Header accountDetails={accountDetails} />)
                const dropdown  = wrapper.find(AccountDropDown);
                expect(dropdown).to.exist;
                expect(dropdown.node.props.accountDetails).to.equal(accountDetails);
            });
            it("should render the <BasketButton /> component", () => {
                const wrapper = mount(<Header accountDetails={accountDetails} />)
                const button  = wrapper.find(BasketButton);
                expect(button).to.exist;
                expect(button.node.props.items).to.equal(2);
            });

        });

    });
});