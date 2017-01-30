import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from "enzyme";
import BasketButton from '../header/components/BasketButton';

describe("app", () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("components", () => {

        describe("<BasketButton />", () => {

            it("it should display basket item count", () => {
                const wrapper = shallow(<BasketButton items={2} />)
                const countSpan = wrapper.find(".basketCount");
                expect(countSpan).to.exist;
                expect(countSpan.node.props.children).to.equal(2);
            });

        });

    });

});