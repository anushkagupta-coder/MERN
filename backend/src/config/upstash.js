import {Ratelimit} from "@upstash/ratelimit"

import { Redis } from "@upstash/redis";
im

const ratelimit = new Ratelimit({
    redis: Redis .fromEnv();
    limiter:Ratelimit.slidingWindow()
})