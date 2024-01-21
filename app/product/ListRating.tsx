"use client"

import { Rating } from "@mui/material";
import Heading from "../components/productsFetcher/Heading";
import Moment from "moment"
import Avatar from "../components/productsFetcher/Avatar";


interface ListRatingProps {
    product: any
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
    return (
        <div>
            <Heading title="Product Review" />
            <div className="text-sm mt-2">
                {
                    product?.reviews?.map((rev: any) => {
                        return (
                            <div key={rev.id}
                                className="max-w-[300px]"
                            >
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <Avatar src={rev.user.image} />
                                    </div>
                                    <div className="font-semibold">{rev.user.name}</div>
                                    <div className="font-light">{Moment(rev.createdDate).fromNow()}</div>
                                </div>
                                <div className="mt-2">
                                    <Rating value={rev.rating} readOnly />
                                    <div className="ml-2">{rev.comment}</div>
                                    <hr className="mt-4 mb-t4" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ListRating;