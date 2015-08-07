function forEach(collection, eachCallback, doneCallback)
{
    var idx, isObject, keys, len, isCallback, isDoneCallback, directive;

    idx = 0;
    isCallback = typeof eachCallback === 'function';
    isDoneCallback = typeof doneCallback === 'function';

    directive = {

        continue: function(condition)
        {
            var is = typeof condition === 'undefined' ? true : condition;

            if(is)
            {
                throw 'Stop process!';
            }
        },
        break: function(condition)
        {
            var is = typeof condition === 'undefined' ? true : condition;

            if(is)
            {
                idx = collection.length;
            }
        }
    };

    switch(typeof collection)
    {
        case 'number':

            collection = new Array(collection);

            break;

        case 'undefined':

            collection = [];

            break;
    }

    if(collection instanceof Array)
    {
        len = collection.length;
    }
    else
    {
        isObject = true, keys = Object.keys(collection);
        len = keys.length;
    }

    setTimeout(function()
    {
        var proc, key;

        key = isObject ? keys[idx] : idx;

        proc = arguments.callee;

        if(idx < len)
        {
            if(isCallback)
            {
                try
                {
                    eachCallback.call(collection, key, collection[key], directive);
                }
                catch(e)
                {
                }
            }

            if(idx >= len - 1 && isDoneCallback)
            {
                doneCallback.call(collection);
            }

            idx++, setTimeout(proc, 0);
        }

    }, 0);

    return arguments.callee;
};

module.export = forEach;