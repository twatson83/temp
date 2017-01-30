import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from "enzyme";
import Navigation from '../shared/components/Navigation';
import {  Link } from 'react-router';

describe("app", () => {

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("components", () => {

        describe("<Navigation />", () => {

            it("it should render all links", () => {
                const wrapper = shallow(<Navigation selectedPage="Deals" />)
                const links = wrapper.find(Link);
                expect(links).to.exist;
                expect(links).to.have.length(2);
                expect(links.nodes[0].props.to).to.equal("/");
                expect(links.nodes[1].props.to).to.equal("/products");
            });

            it("should highlight the selectedPage link", () => {
                const wrapper = shallow(<Navigation selectedPage="Deals" />)
                const link  = wrapper.find(".selectedPage");
                expect(link).to.exist;
                expect(link.node.props.children).to.equal("Deals");
            });

        });

    });

});