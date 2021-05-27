const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    foundTag = await Tag.findByPK(req.params.id, {include:[{ProductTag}, {Product}] });
    if (!foundTag) {
      res.status(404).json({ message: "No product wit hthis tag found"});
    }
    res.status(200).json(foundTag);
  }

  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
